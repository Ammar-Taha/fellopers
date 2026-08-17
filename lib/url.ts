type UrlQueryParams = {
  params: string;
  pathname: string;
  key: string;
  value: string | null;
};

export function formUrlQuery({ params, pathname, key, value }: UrlQueryParams) {
  const searchParams = new URLSearchParams(params);

  if (value) {
    searchParams.set(key, value);
  } else {
    searchParams.delete(key);
  }

  const queryString = searchParams.toString();
  return queryString ? `${pathname}?${queryString}` : pathname;
}

export function removeKeysFromUrlQuery({
  params,
  pathname,
  keysToRemove,
}: {
  params: string;
  pathname: string;
  keysToRemove: string[];
}) {
  const searchParams = new URLSearchParams(params);

  keysToRemove.forEach((key) => {
    searchParams.delete(key);
  });

  const queryString = searchParams.toString();
  return queryString ? `${pathname}?${queryString}` : pathname;
}
