const createStoreImpl = createState => {}

export const create = createState => {
  return createStoreImpl(createState)
}
