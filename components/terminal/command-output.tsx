interface CommandOutputProps {
  command: string;
  output: string;
}

export default function CommandOutput({ command, output }: CommandOutputProps) {
  return (
    <div className="mb-2">
      <div className="text-green-500">$ {command}</div>
      <pre
        className="whitespace-pre-wrap ml-4"
        dangerouslySetInnerHTML={{ __html: output }}
      />
    </div>
  );
}
