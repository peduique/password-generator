import { copyToClipboard } from "../helpers/copyToClipboard";
import { OPTIONS } from "../helpers/generatePassword";
import { usePasswordGenerator } from "../hooks/usePasswordGenerator";


const PasswordGenerator = () => {
  const {
    filters,
    password,
    onUpdateFilters,
    onGeneratePassword
  } = usePasswordGenerator();

  const handleCopyToClipboard = () => {
    copyToClipboard(password);
  }

  return (
    <div className="flex flex-col items-start gap-2 border rounded-lg p-5 w-full md:w-1/3 mx-auto bg-[#f9f9f9]">
      <h1 className="text-lg font-bold mb-4">Password Generator</h1>

      <div className="flex items-center gap-2 mb-2">
        <label htmlFor="length">Password length: {filters.length}</label>
        <input type="range" value={filters.length} max="20" onChange={onUpdateFilters('length')} />
      </div>
      {Object.keys(OPTIONS).map(option => (
        <label className="flex items-center gap-2" key={option}>
          <input
            type="checkbox"
            name={option}
            onChange={onUpdateFilters('options')}
            checked={filters.options.includes(option)}
          />
          Include {option}
        </label>
      ))}

      <button
        className="mt-5 bg-blue-500 text-white px-3 py-2 rounded"
        onClick={onGeneratePassword}
      >
        Generate
      </button>

      <h2 className="mt-5">Password:</h2>
      <div className="relative w-full">
        <input
          readOnly
          type="text"
          value={password}
          className="border rounded-lg p-2 mb-5 w-full"
        />
        <button
          disabled={!password}
          onClick={handleCopyToClipboard}
          className="absolute right-2 top-2 bg-orange-500 text-white px-2 py-1 text-sm rounded-lg hover:bg-orange-600 disabled:opacity-50 focus:bg-orange-700"
        >
          copy
        </button>
      </div>
    </div>
  )
}

export default PasswordGenerator;
