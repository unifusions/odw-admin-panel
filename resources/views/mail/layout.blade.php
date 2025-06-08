<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>{{ $title ?? 'Notification' }}</title>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        body,
        table,
        td {
            font-family: 'Manrope', Arial, sans-serif !important;
            background-color: #f7f7fc;
            margin: 0;
            padding: 0;
        }
    </style>
</head>

<body>
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr style="background: #fff !important;">
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" role="presentation"
                    style=" border-radius: 8px; padding: 20px; margin: 40px auto;">
                    <tr style="">
                        <td align="center" style="padding-bottom: 20px;">

                            <img    src="{{ $message->embed(asset('/storage/logo/Bujishu-logo.png')) }}"  alt="Logo" style="height: 80px;"/>

                         
                        </td>
                    </tr>
                    <tr>
                        <td>
                            @yield('content')
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="font-size: 12px; color: #999; padding-top: 40px;">
                            &copy; {{ date('Y') }} OneDentalWorld. All rights reserved.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
