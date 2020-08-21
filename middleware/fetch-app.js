export default async function (context) {
  const { apps } = await context.$content('apps')

  return apps
}
