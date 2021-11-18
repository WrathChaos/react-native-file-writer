import RNFetchBlob, { Encoding } from "rn-fetch-blob";

export const writeFile = (
  data: any,
  filename: string,
  fileExtension: string,
  encoding: Encoding = "utf8",
  enableDecycle?: boolean,
  enableStringify?: boolean,
): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      let processedData = data;
      if (enableStringify) {
        if (enableDecycle)
          processedData = JSON.stringify(decycle(processedData));
        else processedData = JSON.stringify(processedData);
      }

      const path =
        RNFetchBlob.fs.dirs.DownloadDir + `/${filename}.${fileExtension}`;
      await RNFetchBlob.fs.writeFile(path, processedData, encoding);
      resolve(path);
    } catch (error) {
      reject(error);
    }
  });
};

export const decycle = (obj: any, stack = []): any => {
  if (!obj || typeof obj !== "object") return obj;

  if (stack.includes(obj)) return null;

  let s = stack.concat([obj]);

  return Array.isArray(obj)
    ? obj.map((x) => decycle(x, s))
    : Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [k, decycle(v, s)]),
      );
};
