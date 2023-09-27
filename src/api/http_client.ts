abstract class HttpClient {
  abstract get<T>(path: string, headers?: Record<string, string>): Promise<T>;
}

export class HttpClientService extends HttpClient {
  private host: string;

  constructor(host: string) {
    super();

    this.host = host;
  }

  async get<T>(
    path: string,
    headers?: Record<string, string> | undefined,
  ): Promise<T> {
    const response = await fetch(`${this.host}${path}`, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return (await response.json()) as T;
  }
}
