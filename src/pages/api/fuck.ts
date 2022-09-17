import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

type Session = {
  dateFrom: Date;
  dateTo: Date;
};

type Attendee = {
  name: string;
  email: string;
};

type Data = {
  name: string;
  location?: string;
  sessions: Session[];
  attendees: Attendee[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'GET') {
    return;
  }
  const jamSchema = z.object({ name: z.string() });
  const query = jamSchema.parse(req.query);
  const sessions = [
    {
      dateFrom: new Date(),
      dateTo: new Date(),
    },
  ];
  const attendees = [
    {
      name: 'Zach',
      email: 'zac@gmail.com',
    },
  ];
  res.status(200).json({
    name: query.name,
    sessions,
    attendees,
  });
}
