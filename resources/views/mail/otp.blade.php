<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Your OTP Code</title>
</head>
<body>
    <h2>Hello,</h2>
    <p>Your One-Time Password (OTP) is:</p>
    <h1 style="font-size: 32px; color: #333;">{{ $otp ?? ''}}</h1>
    <p>This code is valid for 10 minutes. Please do not share it with anyone.</p>
    <br>
    <p>Thanks,<br><strong>Your App Team</strong></p>
</body>
</html>
