import { Request, Response, NextFunction } from "express";

export const authorize = (...AlowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const user = req.user;

    if (!user || !AlowedRoles.includes(user.role)) {
      res.status(403).json({ success: false, message: "Access Forbiden!" });
      return;
    }

    next();
  };
};
