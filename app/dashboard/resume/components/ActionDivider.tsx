export function ActionDivider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-muted"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="bg-background px-4 text-sm text-muted-foreground">ou continue diretamente</span>
      </div>
    </div>
  );
}
