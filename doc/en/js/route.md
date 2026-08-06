# route.js

Single page front-end routing management

## nowUrl()

Get the current URL path with the leading slash removed

Return value: current path string

## route(hook)

Register the listening callback for route changes. When registering, it will be executed once with the current path.

parameter:
- `hook` : Route monitoring callback function
  - Parameter
    - `url` : current path
    - `pre` : last path

Return value: Unregistered cleanup function

## setPre(url)

Save the last recorded URL

parameter:
- `url` : path string

## preUrl()

Get the URL of the last record

Return value: last path string

## refresh(url)

Force all route listening callbacks to be triggered at the specified path and update pre

parameter:
- `url` : target path, default current path

## removeSlash(url)

Remove slashes from path headers

parameter:
- `url` : path string

Return value: path after removing the leading slash

## setUrl(url)

Update browser address bar URL status

parameter:
- `url` : target path

Return value: 1 if the path actually changes

## goto(url)

Update the browser address and trigger a route refresh

parameter:
- `url` : target path