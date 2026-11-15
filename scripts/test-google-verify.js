async function checkVerification() {
  try {
    const res = await fetch('http://127.0.0.1:5173/google499fb3e8a1e16a57.html');
    const text = await res.text();
    console.log(`Status: ${res.status}`);
    console.log(`Content: "${text.trim()}"`);
    if (res.status === 200 && text.includes('google-site-verification: google499fb3e8a1e16a57.html')) {
      console.log('SUCCESS: Google verification file is served correctly at root!');
    } else {
      console.error('FAILED: Verification file content or status mismatch');
    }
  } catch (err) {
    console.error('Request error:', err.message);
  }
}

checkVerification();
