export interface IAchPagination<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  size: number;
  page: number;
}


export class AchLocalPagination {

  public static pagination<T>(content: T[], page = 1, size = 10): IAchPagination<T> {

    const getData = <T>(dataBody: T[], page = 1, size = 10) => {
      const newDatabody: T[] = []
      const start = ((page * size) - size) + 1
      const end = page * size
      for (let index = start; index <= end; index++) {
        const ind = index - 1
        if (dataBody[ind]) newDatabody.push(dataBody[ind])
      }
      return newDatabody
    }

    const valuesPag: IAchPagination<T> = {} as IAchPagination<T>;

    valuesPag.page = page;
    valuesPag.size = size;
    valuesPag.totalElements = content.length;

    // const res= 
    const _totalPages = Math.floor((content.length - 1) / size) + 1;
    valuesPag.totalPages = content.length === 0 ? 0 : _totalPages;

    valuesPag.content = getData<T>(content, page, size)

    return valuesPag
  }
}
