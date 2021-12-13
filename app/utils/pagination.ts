export function calculateNumberOfPages(totalHits: number, pageSize: number) {
  return totalHits % pageSize == 0
    ? Math.floor(totalHits / pageSize)
    : Math.floor(totalHits / pageSize) + 1;
}

export const PAGE_SIZE = 12;
