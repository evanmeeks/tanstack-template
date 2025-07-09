import { Send } from "lucide-react";

interface WelcomeScreenProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isLoading: boolean;
}
const triggerSubmit = (input: string) => {
  const textarea = document.querySelector("textarea");
  if (textarea) {
    textarea.value = input;
  }
  const submitButton = document.querySelector("button[type='submit']");
  return submitButton?.click();
};

export const WelcomeScreen = ({
  input,
  setInput,
  handleSubmit,
  isLoading,
}: WelcomeScreenProps) => (
  <div className="flex items-center justify-center flex-1 px-4">
    <div className="w-full max-w-5xl mx-auto text-center">
      <h1 className="mb-4 text-5xl font-bold text-transparent uppercase bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text">
        <span className="text-white">Chat With OMI Solutions Pro</span>
        {` `}Documentation
      </h1>
      <div className="w-2/3 mx-auto mb-4 flex flex-col items-center gap-2">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setInput(
              "Summarize the documentation at https://github.com/DinnaCo/dinnafind"
            );
            // Simulate form submit
            setTimeout(() => {
              triggerSubmit(input);
            }, 0);
          }}
          className="text-orange-400 hover:underline"
        >
          https://github.com/DinnaCo/dinnafind
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setInput(
              "Summarize the documentation at https://github.com/evanmeeks/package-pilot"
            );
            setTimeout(() => {
              triggerSubmit(input);
            }, 0);
          }}
          className="text-orange-400 hover:underline"
        >
          https://github.com/evanmeeks/package-pilot
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setInput(
              "Summarize the documentation at https://github.com/evanmeeks/chatgpt-wordsmith"
            );
            setTimeout(() => {
              triggerSubmit(input);
            }, 0);
          }}
          className="text-orange-400 hover:underline"
        >
          https://github.com/evanmeeks/chatgpt-wordsmith
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setInput(
              "Summarize the Notion page: https://www.notion.so/SOCIALIZED-PREDICTION-MARKET-SYSTEM-FOR-NEWS-ARTICLES-76d93532b2854f7dbadd7856e12757ce?source=copy_link"
            );
            setTimeout(() => {
              triggerSubmit(input);
            }, 0);
          }}
          className="text-orange-400 hover:underline"
        >
          Notion: Socialized Prediction Market System for News Articles
        </a>
      </div>
      <p className="w-2/3 mx-auto mb-6 text-lg text-gray-400">
        Ask anything about OMI Solutions, its documentation, or the linked
        resources below. Your questions can reference code, features, or
        documentation from these projects.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="relative max-w-xl mx-auto">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Type something clever (or don't, we won't judge)..."
            className="w-full py-3 pl-4 pr-12 overflow-hidden text-sm text-white placeholder-gray-400 border rounded-lg resize-none border-orange-500/20 bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent"
            rows={1}
            style={{ minHeight: "88px" }}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute p-2 text-orange-500 transition-colors -translate-y-1/2 right-2 top-1/2 hover:text-orange-400 disabled:text-gray-500 focus:outline-none"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  </div>
);
