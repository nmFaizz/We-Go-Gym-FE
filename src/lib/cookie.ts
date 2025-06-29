const storage_name = "id";

export const getId = (): string | null => {
	return localStorage.getItem(storage_name) 
}

export const setId = (id: string) => {
	localStorage.setItem(storage_name, id)
}

export const removeId = () => {
	localStorage.removeItem(storage_name)
}
