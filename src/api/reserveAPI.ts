import axios from "axios";
import { Reservation } from "@/types/reservation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAllReservationsApi = async (): Promise<Reservation[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/reservations/findAll`);
    return response.data as Reservation[];
  } catch (err) {
    console.error("예약 조회 API 실패", err);
    return [];
  }
};

export const cancelReservationApi = async (roomNumber: number, date: string) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/reservations`, {
      data: { roomNumber, date },
    });
    return response.data;
  } catch (err) {
    console.error("예약 취소 API 실패", err);
    throw err;
  }
};
