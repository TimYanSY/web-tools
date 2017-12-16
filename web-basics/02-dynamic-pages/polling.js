// Storing everything in-memory
const poll = {
  question: `Which is better?`,
  options: [ 'Cats', 'Dogs', 'I prefer pets without fur', 'I forsake animal companionship' ],
  tally: [],
  submit: 'I Choose You!'
};

const polling = {

  showQuestion: function () {
    const choices = poll.options.map( (option, index) => `
      <li class="option-${index}">
        <label><input type="radio" name="choice" value="${index}"/>${option}</label>
      </li>
    `).join('\n');
    return `
    <div class="poll-ask">
      <form action="results" method="POST">
      ${poll.question}
      <ul class="poll-choices">
        ${choices}
      </ul>
      <button type="submit">${poll.submit}</button>
      </form>
    </div>
    `;
  },

  showResults: function () {
    const totalAnswers = poll.tally.reduce(
      (total, toAdd) => total + toAdd, 0
    );
    const choices = poll.options.map( (option, index) => `
      <li class="option-${index}">
        <progress value="${poll.tally[index]}" max="${totalAnswers}"></progress> ${poll.tally[index] || 0}/${totalAnswers} ${option}
      </li>
    `).join('\n');
    return `
    <div class="poll-results">
      ${poll.question}
      <ul class="poll-choices">
        ${choices}
      </ul>
    </div>
    <div><a href="/poll">More voting</a></div>
    `;
  },
  addResult: function(choice) {
    if(choice) {
      poll.tally[choice] = poll.tally[choice] + 1|| 1;
    }
    return polling.showResults();
  }
};

module.exports = polling;
