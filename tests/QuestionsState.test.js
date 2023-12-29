const { selectAllQuestions } = require("../src/questions/questionsSlice");

describe("tests selectAllQuestions function which provides data for the app", () => {
  it("selects all questions from the state", () => {
    // Mocks Redux state with a sample questions array
    const state = {
      questions: {
        questionsArray: [
          { id: 1, text: "What is your favorite color?" },
          { id: 2, text: "How many cups of coffee do you drink in a day?" },
        ],
      },
    };

    // Call the selector with the mock state
    const selectedQuestions = selectAllQuestions(state);

    // Assert that the selector returns the correct questions array
    expect(selectedQuestions).toEqual([
      { id: 1, text: "What is your favorite color?" },
      { id: 2, text: "How many cups of coffee do you drink in a day?" },
    ]);
    expect(selectedQuestions.length).toEqual(2);
  });

  it("returns a falsy value (empty array) if questionsArray is not present in the state", () => {
    const state = {
      questions: {},
    };

    // Call the selector with the mock state
    const selectedQuestions = selectAllQuestions(state);

    expect(selectedQuestions).toBeFalsy();
  });
});
