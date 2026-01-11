const nodemailer = require('nodemailer');

async function Contact_controller(req, res) {
    console.log('=== Contact Request Received ===');
    console.log('Body:', req.body);
    console.log('MAIL exists:', !!process.env.MAIL);
    console.log('PASS exists:', !!process.env.PASS);
    
    // Handle both 'msg' and 'message' fields from frontend
    const { name, email, number, address, message, msg } = req.body;
    const userMessage = message || msg;

    if (!name || !email || !userMessage) {
        console.log('Validation failed: Missing required fields');
        return res.status(400).json({ 
            success: false, 
            message: 'Name, email, and message are required!' 
        });
    }

    try {
        console.log('Creating transporter...');
        
        // Create transporter with detailed config
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // Use TLS
            auth: {
                user: process.env.MAIL,
                pass: process.env.PASS,
            },
            debug: true, // Enable debug output
            logger: true // Log to console
        });

        // Verify transporter configuration
        console.log('Verifying transporter...');
        await transporter.verify();
        console.log('✓ Transporter verified successfully');

        // 1️⃣ Send email to yourself
        console.log('Sending email to yourself...');
        const selfMailInfo = await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.MAIL}>`,
            to: process.env.MAIL,
            replyTo: email,
            subject: `New Work Request from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4;">
                    <div style="background: white; padding: 30px; border-radius: 10px;">
                        <h1 style="color: #0a192f;">New Contact Form Submission</h1>
                        <h2 style="color: #22d3ee;">From: ${name}</h2>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${number || 'Not provided'}</p>
                        <p><strong>Address:</strong> ${address || 'Not provided'}</p>
                        <hr style="margin: 20px 0;">
                        <h3>Message:</h3>
                        <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #22d3ee;">
                            ${userMessage}
                        </p>
                    </div>
                </div>
            `,
        });
        console.log('✓ Email to self sent:', selfMailInfo.messageId);

        // 2️⃣ Send confirmation email to the user
        console.log('Sending confirmation to user...');
        const userMailInfo = await transporter.sendMail({
            from: `"Afiujjaman Mursalin" <${process.env.MAIL}>`,
            to: email,
            subject: 'Thank You for Reaching Out!',
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; background: #0a192f; color: white;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px;">
                        <h1 style="color: #22d3ee;">Thanks for Contacting Me! 😊</h1>
                        <p>Hey <strong>${name}</strong>,</p>
                        <p style="font-size: 16px; line-height: 1.6;">
                            I've received your message and really appreciate your interest in working together!
                        </p>
                        <p style="font-size: 16px; line-height: 1.6;">
                            I'll review your request and get back to you as soon as possible.
                        </p>
                        <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; margin: 20px 0;">
                            <p><strong>Your message:</strong></p>
                            <p style="font-style: italic;">"${userMessage.substring(0, 100)}${userMessage.length > 100 ? '...' : ''}"</p>
                        </div>
                        <p style="margin-top: 30px;">
                            Looking forward to connecting!<br/>
                            <strong style="color: #22d3ee;">Afiujjaman Mursalin</strong>
                        </p>
                    </div>
                </div>
            `,
        });
        console.log('✓ Confirmation email sent:', userMailInfo.messageId);

        // Respond to client
        console.log('=== Success ===');
        res.status(200).json({ 
            success: true, 
            message: 'Emails sent successfully!' 
        });

    } catch (err) {
        console.error('=== ERROR ===');
        console.error('Error details:', err);
        console.error('Error message:', err.message);
        console.error('Error code:', err.code);
        
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send emails.',
            error: err.message,
            code: err.code
        });
    }
}

module.exports = Contact_controller;