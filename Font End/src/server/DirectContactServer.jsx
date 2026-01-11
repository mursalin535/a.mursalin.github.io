import Swal from 'sweetalert2';

async function DirectContactServer(name, email, number, address, msg) {
  
  // Validation
  if (!name || !email || !number || !address || !msg) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill all the fields!',
      background: '#0a192f',
      color: '#fff',
      confirmButtonColor: '#22d3ee',
      iconColor: '#ef4444'
    });
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Email',
      text: 'Please enter a valid email address!',
      background: '#0a192f',
      color: '#fff',
      confirmButtonColor: '#22d3ee',
      iconColor: '#ef4444'
    });
    return;
  }

  // Show loading
  Swal.fire({
    title: 'Sending...',
    text: 'Please wait while we process your message',
    background: '#0a192f',
    color: '#fff',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  try {
    // Replace this with your actual backend endpoint
    const response = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        number,
        address,
        message: msg
      })
    });

    if (response.ok) {
      // Success message
      await Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        html: `
          <div style="font-family: monospace;">
            <p style="color: #22d3ee; font-size: 1.1rem; margin: 10px 0;">
              Thank you, ${name}!
            </p>
            <p style="color: #fff; opacity: 0.8;">
              Your message has been successfully delivered.
            </p>
            <p style="color: #a5f3fc; font-size: 0.9rem; margin-top: 15px;">
              I'll get back to you soon at:<br/>
              <strong>${email}</strong>
            </p>
          </div>
        `,
        background: '#0a192f',
        color: '#fff',
        confirmButtonText: 'Go to Home',
        confirmButtonColor: '#22d3ee',
        iconColor: '#10b981',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });

      // Navigate to home page
      window.location.href = '/';
      
    } else {
      throw new Error('Failed to send message');
    }

  } catch (error) {
    console.error('Error sending message:', error);
    
    Swal.fire({
      icon: 'error',
      title: 'Something went wrong!',
      html: `
        <div style="font-family: monospace;">
          <p style="color: #fff; opacity: 0.9;">
            Unable to send your message at the moment.
          </p>
          <p style="color: #fbbf24; font-size: 0.9rem; margin-top: 10px;">
            Please try again later or contact me directly via social media.
          </p>
        </div>
      `,
      background: '#0a192f',
      color: '#fff',
      confirmButtonText: 'Okay',
      confirmButtonColor: '#22d3ee',
      iconColor: '#ef4444'
    });
  }
}

export default DirectContactServer;