function autoCloseForm() {
  const form = FormApp.getActiveForm();
  const maxResponses = 2; // Change to your limit
  if (form.getResponses().length >= maxResponses) {
    form.setAcceptingResponses(false);
  }
}