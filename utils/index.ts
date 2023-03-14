export const safeAccess = (object: any, path: any) => {
  return object
    ? path.reduce(
        (accumulator: any, currentValue: any) =>
          accumulator && accumulator[currentValue]
            ? accumulator[currentValue]
            : null,
        object
      )
    : null
}
