Creates an HTTP server listening on port 3000 that transforms Inky email markup into Foundation for Emails HTML, and inlines any CSS.

Send POST requests with JSON body like this:

```json
{
  "input": "<style type=\"text/css\">.red { color: red }</style><row><span class=\"red\">All the markup</span></row>"
}
```

And receive back:

```json
{
  "success": true,
  "html": "<html><head></head><body><table class=\"row\"><tbody><tr><span class=\"red\" style=\"color: red;\">All the markup</span></tr></tbody></table></body></html>
"
}
```

See `example.html` for example usage.