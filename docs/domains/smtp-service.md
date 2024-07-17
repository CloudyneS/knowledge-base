## SMTP Service

Our SMTP service enables you to send transactional emails from your domain, for example from Wordpress or Umbraco or other third-party services. Some configuration is required for this to work, but we have made it as easy as possible for you.

If you have your domain and DNS hosted with us or our partners, this configuration is done automatically and you do not need to do anything to get started. If you are using a third-party DNS provider, the following records will need to be setup.

::: tip
If you need the credentials for the SMTP relay for your domain, you can find them in the control panel under the email settings. You need to have either hosting or email with us to be able to use this service.
:::

### Required DNS records
| Record Type | Name | Value |
|-------------|------|-------|
| CNAME | clsmtp.*yourdomain.com* | smtp.cloudyne.systems |
| CNAME | cloudyne1._domainkey.*yourdomain.com* | yourdomain-com._dkim.cloudyne.systems |

For example, for the domain `cloudyne.net`, the records would be:
- `clsmtp.cloudyne.net` -> `smtp.cloudyne.systems`
- `cloudyne1._domainkey.cloudyne.net` -> `cloudyne-net._dkim.cloudyne.systems`

You can see in the control panel whether your domain has been activated for the SMTP service or not. If you have any issues, feel free to contact us.