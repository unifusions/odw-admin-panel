<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>{{ $title ?? 'Notification' }}</title>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        body,
        table,
        td {
            font-family: 'Manrope', Arial, sans-serif !important;

            margin: 0;
            padding: 0;
        }
    </style>
</head>

<body class="body pc-font-alt"
    style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #f9f9f9; font-feature-settings: 'calt';"
    bgcolor="#f9f9f9">
    <table class="pc-project-body"
        style="table-layout: fixed; width: 100%; max-width: 600px; background-color: #ffffff; margin-right:auto; margin-left:auto" bgcolor="#ffffff"
        border="0" cellspacing="0" cellpadding="0" role="presentation">
        <tr style="background: #fff !important;">
            <td align="center" valign="top" style="width:auto;">
                <table class="pc-project-container" align="center" border="0" cellpadding="0" cellspacing="0"
                    role="presentation">



                    <tr>
                        <td class="pc-w620-padding-0-0-0-0" style="padding: 20px 0px 20px 0px;" align="center"
                            valign="top">

                            <a class="pc-font-alt" href="https://odwapp.ai" target="_blank"
                                style="text-decoration: none; display: inline-block; vertical-align: top;">
                                <img src="https://odwapp.ai/images/odw-brand.png"
                                    class="pc-w620-width-auto pc-w620-height-22"
                                    style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 126px; height: auto; border: 0;"
                                    width="126" alt="" />
                            </a>




                        </td>
                    </tr>
                    <tr>
                        <td class="pc-w620-padding-0-0-0-0" style="padding: 20px 0px 20px 0px;" align="center"
                            valign="top">

                            @yield('content')





                        </td>
                    </tr>
                    <tr>
                        <td>
                            @include('mail.footer')
                        </td>
                    </tr>
                    <tr>

                        <td>

                        </td>
                        <!-- <td align="center" style="font-size: 12px; color: #999; padding-top: 40px;">
                           
                        </td> -->
                    </tr>
                </table>


            </td>
        </tr>
    </table>
</body>

</html>