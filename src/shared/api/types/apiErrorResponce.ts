export interface ApiErrorResponse<TDetails = unknown> {
  message?: string;
  errors?: TDetails;
}
