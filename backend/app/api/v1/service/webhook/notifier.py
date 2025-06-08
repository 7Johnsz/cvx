from ...utils.uuid_logs import generate_uuid
from .sender import WebhookSender 

from datetime import datetime
from pytz import timezone

import locale
import logging

logger = logging.getLogger(__name__)

class WebhookNotifier:
    def __init__(self):
        self.sender = WebhookSender()
        try:
            locale.setlocale(locale.LC_ALL, 'pt_BR.UTF-8')
        except locale.Error:
            locale.setlocale(locale.LC_ALL, 'Portuguese_Brazil')

    def _build_embed(self, title, description, color, path, method, ip, ua, content):
        return {
            "embeds": [{
                "author": {
                    "name": f"{method} {path}",
                    "icon_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUREvlCvHREdbT-Xsf2L2dmgO7AulT-6hqeDRUThJvVKKQwYuPwNatanNGyJiXSwubdlC8iTQHCPxOrsM-uuUCfg"
                },
                "title": title,
                "description": description,
                "color": color,
                "footer": {
                    "text": f"Logged at: {datetime.now(timezone('America/Sao_Paulo')).strftime('%A, %B %d, %Y at %H:%M')} | ID: {generate_uuid()}",
                },
                "fields": [
                    {
                        "name": "**Details**",
                        "value": f"```{content}```",
                        "inline": False
                    },
                    {
                        "name": "**User Agent & IP Address**",
                        "value": f"```{ua} | {ip}```",
                        "inline": True
                    }
                ]
            }]
        }

    async def warn(self, path, method, ip, ua, description, content):
        embed = self._build_embed("Warning", description, 16766720, path, method, ip, ua, content)
        await self.sender.send("warn", embed)

    async def error(self, path, method, ip, ua, description, content):
        embed = self._build_embed("Error", description, 13762819, path, method, ip, ua, content)
        await self.sender.send("error", embed)

    async def info(self, path, method, ip, ua, description, content):
        embed = self._build_embed("Info", description, 3447003, path, method, ip, ua, content)
        await self.sender.send("info", embed)
        
notifier = WebhookNotifier()