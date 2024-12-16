export class isRenderOutsideContextError extends Error {
  constructor() {
    super('The component should be used involved by a context.')
  }
}