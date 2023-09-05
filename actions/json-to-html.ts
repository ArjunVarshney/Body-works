export default function JSONtoHTML(data: string) {
  let c = 1;
  let html = "";
  if (!data) return;
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
    } else {
      html += char;
    }
  }
  html = html
    .replace(/":/g, `"<span style="margin-right:5px">:</span>`)
    .replace(
      /"([\w\s?]+)"<span style="margin-right:5px">:<\/span>/g,
      `<span style="color:#d54e50;">"$1"</span><span style="margin-right:5px">:</span>`
    )
    .replace(
      /<span style="margin-right:5px">:<\/span>"([-?\s?\(?\w?\d?/\?\s?\)?\\?]+)"/g,
      `<span style="margin-right:5px">:</span><span style="color:#b9ba1f;">"$1"</span>`
    )
    .replace(
      /"([-?\s?\(?\w?\d+?/\?\s?\)?\/?,?\.?:?\??°?]+)",/g,
      `<span style="color:#b9ba1f;">"$1"</span>,`
    )
    .replace(
      /"([-?\s?\(?\w?\d+?/\?\s?\)?\/?,?\.?:?]+)"<\/div>\]/g,
      `<span style="color:#b9ba1f;">"$1"</span></div>\]`
    )
    .replace(
      /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/g,
      `<a target="_blank" style='color:#3891ff; text-decoration:"underline";' href="$1">$1</a>`
    );

  return html;
}
