import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getLinksSave(key) {
  const myLinks = await AsyncStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}
export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key);

  const hasLink = linksStored.some((link) => link.id === newLink.id);

  if (hasLink) {
    console.log("esse link já existe na lista");
    return;
  }

  linksStored.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(linksStored));
  console.log("link salvo com sucesso!");
}
export async function deleteLink(Links, id) {
  let myLinks = Links.filter((item) => {
    return item.id !== id;
  });
  await AsyncStorage.setItem("mrTlinks", JSON.stringify(myLinks));
  console.log("link deletado do storage");
  return myLinks;
}
