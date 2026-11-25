import XLSX from "xlsx";

export type EXCELDATA = {
  UserName: string;
  Password: string;
};
export function reader() {
  const workBook = XLSX.readFile("testdata/utils.xlsx");
  const worksheet = workBook.Sheets["LOGIN"];
  const data: EXCELDATA[] = XLSX.utils.sheet_to_json(worksheet);
  return data;
}
