export class UserInputError extends Error {
  constructor(message?: string, options?: ErrorOptions) {
    super(message, options)
    this.name = UserInputError.name
  }
}
