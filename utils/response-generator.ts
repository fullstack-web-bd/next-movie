import { NextApiResponse } from "next";

export function generateResponse(
  res: NextApiResponse,
  data: any,
  code: number = 200,
  message: string = ""
) {
  const successStatusCodes = [200, 201, 301, 302];
  const isSuccessfull = successStatusCodes.includes(code);

  return res.status(code).json({
    success: isSuccessfull,
    data: isSuccessfull ? data : null,
    code,
    message,
  });
}
