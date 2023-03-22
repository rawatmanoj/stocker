export default function Button(props: any) {
  return (
    <button
      onClick={props.handleClick}
      className="m-4 inline-flex w-20 items-center justify-center rounded-lg text-specialGreen border-specialGreen border px-5 py-2.5 text-center text-sm font-medium  hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500"
    >
      {props.children}
    </button>
  );
}
