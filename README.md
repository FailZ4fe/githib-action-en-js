# Hello There JavaScript action

This action prints "Hello There" or "Hello" + the name of a person to greet to the log.

## Inputs

### `hello-there`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: actions/hello-there
with:
  hello-there: Mona the Octocat
```

