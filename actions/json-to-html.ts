export default function JSONtoHTML(data: string) {
  let c = 1;
  let html = "";
  for (let i = 0; i < data.length; i++) {
    const char = data.charAt(i);
    if (char === "{" || char === "[") {
      c++;
      html += `${char}<div style="margin-left:${c * 12}px">`;
    } else if (char === "}" || char === "]") {
      html += `</div>${char}`;
      c--;
    } else if (char === ",") {
      html += `,<br>`;
    } else if (char === ":") {
      html += '<span style="margin-right:5px">:</span>';
    } else {
      html += char;
    }
  }
  console.log(html);
  html = html
    .replace(
      /"([\w\s?]+)"<span style="margin-right:5px">:<\/span>/g,
      `<span style="color:#d54e50;">"$1"</span><span style="margin-right:5px">:</span>`
    )
    .replace(
      /<span style="margin-right:5px">:<\/span>"([-?\s?\(?\w\d?/\?\s?\)?\\?]+)"/g,
      `<span style="margin-right:5px">:</span><span style="color:#b9ba1f;">"$1"</span>`
    );
  return html;
}
