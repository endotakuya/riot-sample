app
  h2 { opts.title }
  button(onclick="{ show_count }") click

  script.
    self = this
    let count = 0

    show_count() {
        count += 1
        alert(`count: ${count}`)
    }