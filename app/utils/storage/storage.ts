import AsyncStorage from "@react-native-async-storage/async-storage"
import * as SecureStore from "expo-secure-store"

/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export async function loadString(key: string, safe: boolean = false): Promise<string | null> {
  try {
    if (safe) {
      return await SecureStore.getItemAsync(key)
    }
    return await AsyncStorage.getItem(key)
  } catch {
    // not sure why this would fail... even reading the RN docs I'm unclear
    return null
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function saveString(
  key: string,
  value: string,
  safe: boolean = false,
): Promise<boolean> {
  try {
    if (safe) {
      await SecureStore.setItemAsync(key, value)
    } else {
      await AsyncStorage.setItem(key, value)
    }
    return true
  } catch {
    return false
  }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export async function load(key: string, safe: boolean = false): Promise<string | null> {
  try {
    let raw: string | null
    if (safe) {
      raw = await SecureStore.getItemAsync(key)
    } else {
      raw = await AsyncStorage.getItem(key)
    }
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function save(key: string, value: any, safe: boolean = false): Promise<boolean> {
  try {
    if (safe) {
      await SecureStore.setItemAsync(key, JSON.stringify(value))
    } else {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    }
    return true
  } catch {
    return false
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export async function remove(key: string, safe: boolean = false): Promise<void> {
  try {
    if (safe) {
      await SecureStore.deleteItemAsync(key)
    } else {
      await AsyncStorage.removeItem(key)
    }
  } catch {}
}

/**
 * Burn it all to the ground.
 */
export async function clear(): Promise<void> {
  try {
    await AsyncStorage.clear()
  } catch {}
}
