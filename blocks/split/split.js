/**
 * Decorates the split block
 * @param {Element} block The split block element
 */
export default function decorate(block) {
  // Loop through each row (each job entry)
  [...block.children].forEach((row) => {
    // First column: title and dates
    const leftCol = row.children[0];
    // Second column: description
    const rightCol = row.children[1];

    // Add semantic classes
    if (leftCol) {
      leftCol.classList.add('split-header');

      // Split title and date if separated by <br>
      const content = leftCol.innerHTML;
      if (content.includes('<br>')) {
        const [title, date] = content.split('<br>');
        leftCol.innerHTML = `
          <p class="split-title">${title.trim()}</p>
          <p class="split-subtitle">${date.trim()}</p>
        `;
      }
    }

    if (rightCol) {
      rightCol.classList.add('split-content');
    }

    // Add class to the row for styling
    row.classList.add('split-entry');
  });
}
