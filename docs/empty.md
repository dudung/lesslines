# Not Empty

Just a not-so-empty file for testing MkDocs Documentation deployment.

Test to create `gh-pages` branch, but it stil empty.

Forget `site_dir: site` in the `mkdocs.yml`. Try to add this line. Not work.

Change to `actions/checkout@v3`, `actions/setup-python@v4`, `publish_dir: site`

None work.

Build process ok. Now debug for deploy process.

Try `ls -R ./site` after build.

Try to save artifact.

Add `path: ./site  # Explicitly extract the artifact to ./site`.
