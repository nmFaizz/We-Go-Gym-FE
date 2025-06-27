const storage_name = "id";

export const getId = (): string => {
	return sessionStorage.getItem(storage_name) || ""
}

export const setId = (id: string) => {
	sessionStorage.setItem(storage_name, id)
}

export const removeId = () => {
	sessionStorage.removeItem(storage_name)
}
