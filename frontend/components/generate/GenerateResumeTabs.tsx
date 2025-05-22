import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Edit2 } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

type Props = {
  activeTab: string
  setActiveTab: (tab: string) => void
  editableContent: string
  setEditableContent: (content: string) => void
}

function markdownToHtml(markdown: string) {
  return markdown
    .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mb-2">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold mt-4 mb-2">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-lg font-bold mt-3 mb-1">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\[(.*?)\]$$(.*?)$$/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>')
    .replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
    .replace(/\n\n/g, "<br/><br/>")
}

export function GenerateResumeTabs({ activeTab, setActiveTab, editableContent, setEditableContent }: Props) {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="preview" className="flex items-center gap-2">
          <Eye className="h-4 w-4" />
          <span>Visualizar</span>
        </TabsTrigger>
        <TabsTrigger value="edit" className="flex items-center gap-2">
          <Edit2 className="h-4 w-4" />
          <span>Editar</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="m-0">
        <div className="p-6 prose prose-sm dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: markdownToHtml(editableContent) }} />
        </div>
      </TabsContent>
      <TabsContent value="edit" className="m-0">
        <div className="p-6">
          <Textarea
            value={editableContent}
            onChange={(e) => setEditableContent(e.target.value)}
            className="min-h-[600px] font-mono text-sm"
          />
          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              <strong>Dica:</strong> Use a sintaxe Markdown para formatar seu currículo. Headings com #,
              listas com - e destaque com **.
            </p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
