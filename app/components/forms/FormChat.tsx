export default function FormChat() {
  return (
    <form
      data-loading="false"
      className="flex flex-col gap-5 p-4 border border-white rounded"
    >
      <div className="">
        <textarea
          name="message"
          placeholder="What do you want to know?"
          className="flex w-full border-none focus:border-none focus:outline-none"
        ></textarea>
      </div>
      <div className="flex self-end">
        <button type="submit" className="button button--default">
          Send
        </button>
      </div>
    </form>
  );
}
