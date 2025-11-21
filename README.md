# 공실 예약 시스템 API 명세서

## 기본 정보
- **Base URL**: `process.env.NEXT_PUBLIC_API_BASE_URL`
- **Protocol**: REST API
- **Data Format**: JSON

---

## 1. 예약 조회

### 1.1 전체 예약 조회
모든 예약 목록을 조회합니다.

**Endpoint**
```
GET /api/reservations
```

**Request**
- Headers: (인증 토큰이 필요한 경우 추가)
- Query Parameters: 없음

**Response**
```json
[
  {
    "reserveRoomId": 1,
    "roomId": 101,
    "roomNumber": 101,
    "date": "2025-01-15",
    "floor": 1
  },
  {
    "reserveRoomId": 2,
    "roomId": 202,
    "roomNumber": 202,
    "date": "2025-01-16",
    "floor": 2
  }
]
```

**Response Fields**
| Field | Type | Description |
|-------|------|-------------|
| reserveRoomId | number | 예약 고유 ID |
| roomId | number | 객실 고유 ID |
| roomNumber | number | 호실 번호 |
| date | string | 예약 날짜 (YYYY-MM-DD) |
| floor | number | 층수 (1, 2, 3) |

---

## 2. 예약 생성

### 2.1 새 예약 등록
새로운 공실 예약을 생성합니다.

**Endpoint**
```
POST /api/reservations
```

**Request**
- Headers:
  ```
  Content-Type: application/json
  ```

- Body:
  ```json
  {
    "roomNumber": 101,
    "date": "2025-01-15",
    "floor": 1
  }
  ```

**Request Fields**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| roomNumber | number | Yes | 예약할 호실 번호 |
| date | string | Yes | 예약 날짜 (YYYY-MM-DD) |
| floor | number | Yes | 층수 (1, 2, 3) |

**Response**
```json
{
  "success": true,
  "message": "예약이 완료되었습니다.",
  "data": {
    "reserveRoomId": 1,
    "roomNumber": 101,
    "date": "2025-01-15",
    "floor": 1
  }
}
```

**Error Response**
```json
{
  "success": false,
  "message": "예약 실패. 다시 시도하세요."
}
```

---

## 3. 예약 취소

### 3.1 예약 취소
기존 예약을 취소합니다.

**Endpoint**
```
DELETE /api/reservations
```

**Request**
- Headers:
  ```
  Content-Type: application/json
  ```

- Query Parameters or Body:
  ```json
  {
    "roomNumber": 101,
    "date": "2025-01-15"
  }
  ```

**Request Fields**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| roomNumber | number | Yes | 취소할 호실 번호 |
| date | string | Yes | 예약 날짜 (YYYY-MM-DD) |

**Response**
```json
{
  "success": true,
  "message": "예약이 취소되었습니다."
}
```

**Error Response**
```json
{
  "success": false,
  "message": "취소 실패 (서버 오류)"
}
```

---

## 4. 인증 (예상)

### 4.1 로그인
사용자 로그인을 처리합니다.

**Endpoint**
```
POST /api/auth/login
```

**Request**
```json
{
  "studentId": "20241234",
  "password": "password123"
}
```

**Request Fields**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| studentId | string | Yes | 학번 |
| password | string | Yes | 비밀번호 |

**Response**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "studentId": "20241234",
    "name": "김파드"
  }
}
```

---

## 에러 코드

| Status Code | Description |
|-------------|-------------|
| 200 | 요청 성공 |
| 201 | 리소스 생성 성공 |
| 400 | 잘못된 요청 |
| 401 | 인증 실패 |
| 404 | 리소스를 찾을 수 없음 |
| 409 | 중복된 예약 |
| 500 | 서버 내부 오류 |

---

## 비즈니스 로직

### 예약 규칙
- **입실 시간**: 예약 날짜 오후 3시
- **퇴실 시간**: 예약 날짜 오전 11시
- **취소 가능 시간**: 예약 날짜 12:00 PM까지
- **층수**: 1층, 2층, 3층
- **건물명**: 은혜관

### 화면별 API 사용

#### Dashboard (`/dashBoard`)
- `GET /api/reservations` - 모든 예약 조회
- `DELETE /api/reservations` - 예약 취소

#### Reservation (`/reservation`)
- `POST /api/reservations` - 새 예약 생성

#### MyPage (`/myPage`)
- `GET /api/reservations` - 모든 예약 조회
- `DELETE /api/reservations` - 예약 취소

#### Login (`/login`)
- `POST /api/auth/login` - 로그인

---

## 참고사항

1. **날짜 형식**: 모든 날짜는 `YYYY-MM-DD` 형식을 사용합니다.
2. **시간 형식**: 시간은 12시간 형식 (오전/오후)으로 표시됩니다.
3. **인증**: 실제 구현에서는 JWT 토큰 등의 인증 메커니즘이 필요할 수 있습니다.
4. **환경변수**: API Base URL은 `.env` 파일에서 `NEXT_PUBLIC_API_BASE_URL`로 관리됩니다.
