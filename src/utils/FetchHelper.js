export async function FetchHelper(url, controller) {
  const response = await fetch(url, { signal: controller.signal });
  const data = await response.json();
  return data;
}
