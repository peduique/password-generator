export async function copyToClipboard(url: string) {
  try {
    await navigator.clipboard.writeText(url);

    return { success: true, message: "Link copied to clipboard" };
  } catch (err) {
    return { success: false, message: `Error on copying link to clipboard: ${err}` };
  }
}
