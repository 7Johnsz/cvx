import httpx
import os

class WebhookSender:
    def __init__(self):
        self.webhooks = {
            "error": os.getenv("ERROR_WEBHOOK_URL"),
            "warn": os.getenv("WARN_WEBHOOK_URL"),
            "info": os.getenv("INFO_WEBHOOK_URL")
        }

    async def send(self, level: str, content: dict):
        url = self.webhooks.get(level)
        if not url:
            raise ValueError(f"Any webhook not found for level: {level}")

        try:
            async with httpx.AsyncClient() as client:
                response = await client.post(url, json=content)
                response.raise_for_status()
        except httpx.HTTPStatusError as e:
            raise Exception(f"Webhook failed with status {e.response.status_code}: {str(e)}")