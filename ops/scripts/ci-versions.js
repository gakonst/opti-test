// this script unbundles the published packages output 
// from changesets action to a key-value pair to be used 
// with our publishing CI workflow
data = JSON.parse(process.argv[2])

builder = false
for (const i of data) {
  if (name !== 'l2geth') {
    builder = true
  }
  const name = i.name.replace("@eth-optimism/", "")
  const version = i.version
  console.log(`::set-output name=${name}::${version}`)
}

if (builder) {
  console.log(`::set-output name=builder::true`)
}

