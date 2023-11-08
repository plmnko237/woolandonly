export default function handler(request, answer) {
  if (request.method == "POST") {
    console.log(request.query);
    answer.status(200).json("완료");
  }
}
