export async function onRequest({ request, env }) {
  return Response.redirect(env.WEBSITE_URL, 301);
}
